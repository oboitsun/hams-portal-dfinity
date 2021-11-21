import AccountIdentifier "./util/AccountIdentifier";
import Debug "mo:base/Debug";
import NftCanister "NftCanister";
import Core "./ext/Core";
import Principal "mo:base/Principal";
import Nat32 "mo:base/Nat32";
import Nat16 "mo:base/Nat16";
import Nat8 "mo:base/Nat8";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Buffer "mo:base/Buffer";
import LedgerCanister "LedgerCanister";
// import service "ic:ryjl3-tyaaa-aaaaa-aaaba-cai";




actor {


    public func greet(name : Text) : async Text {
        return "Hello, " # name # "!";
    };

    public func startAdventure(): async Text {
    return "Adventure started! ";
    };

    // public func getAccountBalance(account: Text) : async Text
    // {
    //     let yourActor : LedgerCanister.Self = actor("ryjl3-tyaaa-aaaaa-aaaba-cai") ;
    //     return "123";
    // };


    public func getAccountIdenftifierFromPrincipal(principal : Principal) : async Text
    {
        
        Debug.print("get acc identifier called");
        let accId  = AccountIdentifier.fromPrincipal(principal, null);
        return accId;
    };

    public func listings() : async [(NftCanister.TokenIndex, NftCanister.Listing, NftCanister.Metadata)]
    {
        let yourActor : NftCanister.Self  = actor ("bid2t-gyaaa-aaaah-qcdea-cai");
        let listings : [(NftCanister.TokenIndex, NftCanister.Listing, NftCanister.Metadata)]  =  await yourActor.listings();
        // tokens[0];
        return listings;
    };

    public func getRegistry() : async [(NftCanister.TokenIndex, NftCanister.AccountIdentifier_3)]
    {
        let yourActor : NftCanister.Self  = actor ("bid2t-gyaaa-aaaah-qcdea-cai");
        let registry : [(NftCanister.TokenIndex, NftCanister.AccountIdentifier_3)]  =  await yourActor.getRegistry();
        // tokens[0];
        return registry;
    };

    public func getTokens() :  async [(NftCanister.TokenIndex, NftCanister.Metadata)]
    {
        let yourActor : NftCanister.Self  = actor ("bid2t-gyaaa-aaaah-qcdea-cai");
        let tokens : [(NftCanister.TokenIndex, NftCanister.Metadata)]  =  await yourActor.getTokens();
        // tokens[0];
        return tokens;
    };

    public func getTokens2() : async Text
    {
        let yourActor : NftCanister.Self  = actor ("bid2t-gyaaa-aaaah-qcdea-cai");
        // let user:NftCanister.User;
    
        
        let tokens : [(NftCanister.TokenIndex, NftCanister.Metadata)]  =  await yourActor.getTokens();



        Debug.print("tokens");
        let tokenText = tokens;
        return "tokens fine"
    };

      public func test() : async Text
    {
        let yourActor : NftCanister.Self  = actor ("bid2t-gyaaa-aaaah-qcdea-cai");
        return "lalaland";
    }

};



