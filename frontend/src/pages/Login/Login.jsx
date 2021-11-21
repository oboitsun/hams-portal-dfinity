import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StoicIdentity } from "ic-stoic-identity";
import { setShowModal, setUser } from "../../reducers/uiReducer";
import { useNavigate, useLocation } from "react-router-dom";
import "./login-page.scss";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import loginBG from "../../../assets/bg-login.png"
import Modal from "../../components/Modal";
import ButtonTemplate from "../../components/ButtonTemplate";
import { Actor, HttpAgent } from '@dfinity/agent';
import { counter } from 'canisters/counter';
// import extjs from '../../ic/extjs';
import candid from '../../ic/candid/ledger.did'
import RosettaApi from "../../ic/RosettaApi";

//added

export default function Login(props)
{
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  let state = location.state;
  let from = state ? state.from.pathname : "/";
  const rosettaApi = new RosettaApi();

  let x;



  const handleLogin = () => 
  {
    dispatch(setUser(true));
    navigate(from, { replace: true });
  }

  const handleLoginStoic = () =>
  {



    // const actor = ic.agent.makeActorFactory(candid)({ canisterId: 'ryjl3-tyaaa-aaaaa-aaaba-cai' });

    // window.ic = { agent: createAgent(host), HttpAgent, IDL };


    StoicIdentity.load().then(async identity =>
    {
      console.log("stoic loaded")
      if (identity !== false)
      {
        //ID is a already connected wallet!
      } else
      {
        //No existing connection, lets make one!
        identity = await StoicIdentity.connect();
      }
      // identity = identity;
      const canisterId = await identity.getPrincipal()
      console.log(canisterId, identity)
      let ownIdentityCanisterId = canisterId;

      // Create an actor canister


      const idlFactory = ({ IDL }) =>
      {
        const TokenIndex = IDL.Nat32;
        const AccountIdentifier_3 = IDL.Text;
        const Metadata = IDL.Variant({
          'fungible': IDL.Record({
            'decimals': IDL.Nat8,
            'metadata': IDL.Opt(IDL.Vec(IDL.Nat8)),
            'name': IDL.Text,
            'symbol': IDL.Text,
          }),
          'nonfungible': IDL.Record({ 'metadata': IDL.Opt(IDL.Vec(IDL.Nat8)) }),
        });
        const Time = IDL.Int;
        const Listing = IDL.Record({
          'locked': IDL.Opt(Time),
          'seller': IDL.Principal,
          'price': IDL.Nat64,
        });

        return IDL.Service({
          'getAccountIdenftifierFromPrincipal': IDL.Func(
            [IDL.Principal],
            [IDL.Text],
            [],
          ),
          'getRegistry': IDL.Func(
            [],
            [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier_3))],
            [],
          ),
          'getTokens': IDL.Func([], [IDL.Vec(IDL.Tuple(TokenIndex, Metadata))], []),
          'getTokens2': IDL.Func([], [IDL.Text], []),
          'greet': IDL.Func([IDL.Text], [IDL.Text], []),
          'listings': IDL.Func(
            [],
            [IDL.Vec(IDL.Tuple(TokenIndex, Listing, Metadata))],
            [],
          ),
          'test': IDL.Func([], [IDL.Text], []),
        });
      };

      let ledgerCanId = "ryjl3-tyaaa-aaaaa-aaaba-cai";
      const ledger = Actor.createActor(candid, {
        agent: new HttpAgent({
          host: "https://ryjl3-tyaaa-aaaaa-aaaba-cai.raw.ic0.app/",
          identity: identity,
        }),
        ledgerCanId,
      });

      const accId = counter.getAccountIdenftifierFromPrincipal(canisterId).then(async accId =>
      {
        console.log("acc id: " + accId)
        console.log("identity: ")
        console.log(identity);

        rosettaApi.accountBalanceByAddress(accId).then(res =>
        {
          const icpBalance = res.balances[0].value / 100000000;

          //DISPLAY ICP BALANCE
          console.log("Wallet balance: " + icpBalance + " icp");

        })

        let ledgerCanId = "ryjl3-tyaaa-aaaaa-aaaba-cai";
        const actor1 = Actor.createActor(candid, {
          agent: new HttpAgent({
            host: "https://ryjl3-tyaaa-aaaaa-aaaba-cai.raw.ic0.app/",
            identity: identity,
          }),
          ledgerCanId,
        });

        console.log(actor1);


        let canisterId = "bid2t-gyaaa-aaaah-qcdea-cai"
        const actor = Actor.createActor(idlFactory, {
          agent: new HttpAgent({
            host: "https://bid2t-gyaaa-aaaah-qcdea-cai.raw.ic0.app/",
            identity: identity,
          }),
          canisterId,
        });

        const getgetTokenIdentifier = (index) =>
        {
          let canisterId = "bid2t-gyaaa-aaaah-qcdea-cai"

          let token_id = extjs.encodeTokenId(canisterId, index - 1);

          return token_id;
        }

        let ownedNftImages = []
        actor.listings().then(result =>
        {


          let canisterId = "bid2t-gyaaa-aaaah-qcdea-cai"
          const actor = Actor.createActor(idlFactory, {
            agent: new HttpAgent({
              host: "https://bid2t-gyaaa-aaaah-qcdea-cai.raw.ic0.app/",
              identity: identity,
            }),
            canisterId,
          });

          actor.getRegistry().then(resultingArray =>
          {
            console.log(resultingArray);
            let ownedNfts = [];
            if (Array.isArray(resultingArray))
            {
              let i = resultingArray.length;
              while (i-- > 0)
              {
                let singleRecord = resultingArray[i];
                if (singleRecord[1] == accId)
                {
                  singleRecord[0]++;
                  ownedNfts.push(singleRecord[0])
                  let prefix = "https://bid2t-gyaaa-aaaah-qcdea-cai.raw.ic0.app/?tokenid=";
                  let suffix = getgetTokenIdentifier(singleRecord[0]);
                  let loadUrl = prefix + suffix;
                  ownedNftImages.push(loadUrl);
                }
              }



              console.log("success, got owned nfts: " + ownedNfts);
              console.log("success, got owned nfts image addr: " + ownedNftImages[0]);
              dispatch(setUser(true));
              navigate(from, { replace: true });
            }





          });

        });

      })
    });

  };
  console.log("rendered");
  const wallets = [
    {
      name: "stoic",
      onClick: handleLoginStoic,
      btnStyle: "turf",
      strokeColor: "#696251",
      color: "#9E9171",
    },
    {
      name: "plug",
      onClick: handleLogin,
      btnStyle: "crimson",
      strokeColor: "#AD6016",
      color: "#D88535",
    },
    {
      name: "earth",
      onClick: handleLogin,
      btnStyle: "charcoal",
      strokeColor: "#000",
      color: "#252525",
    },
  ];

  return (
    <div id="login-page" className="w-full min-h-screen overflow-hidden relative">
      <div className="absolute top-10 w-full left-0 z-[2]">
        <LoginHeader />
      </div>
      <img className="background" src={loginBG} alt="bg" />
      <div className="shade-gradient"></div>
      <div className="my-container">
        <div className="login-window ">
          <p className="heading font-creep">
            Enter the
            <br />
            Haunted house
          </p>
          <div className="grid gap-6 w-full">
            {wallets.map((wallet, i) => (
              <ButtonTemplate
                color={wallet.color}
                strokeColor={wallet.strokeColor}
                key={i}
                type={wallet.btnStyle}
                className={`wallet ${wallet.name}`}
                onClick={wallet.onClick}
              >
                <p className="text-center z-10 relative"> connect {wallet.name} wallet</p>
              </ButtonTemplate>
            ))}
          </div>
          <div className="w-full h-1 bg-white opacity-20 my-8"></div>
          <button
            onClick={() =>
            {
              dispatch(setShowModal(true));
            }}
            className="text-white font-bold text-sm self-start"
          >
            Help Center
          </button>
        </div>
        <div className="absolute bottom-10 w-full left-0 z-[2]">
          <LoginFooter login />
        </div>
      </div>
      <Modal />
    </div>
  );
}
