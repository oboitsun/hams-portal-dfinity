// This is a generated Motoko binding.
// Please use `import service "ic:canister_id"` instead to call canisters on the IC if possible.

module  {
  public type AccountIdentifier = AccountIdentifier_2;
  public type AccountIdentifier_2 = Text;
  public type AccountIdentifier_3 = AccountIdentifier;
  public type Balance = Nat;
  public type BalanceRequest = BalanceRequest_2;
  public type BalanceRequest_2 = { token : TokenIdentifier; user : User };
  public type BalanceResponse = BalanceResponse_2;
  public type BalanceResponse_2 = Result_12;
  public type Balance_2 = Balance;
  public type CommonError = CommonError_2;
  public type CommonError_2 = {
    #InvalidToken : TokenIdentifier;
    #Other : Text;
  };
  public type Extension = Extension_2;
  public type Extension_2 = Text;
  public type HeaderField = (Text, Text);
  public type HttpRequest = {
    url : Text;
    method : Text;
    body : [Nat8];
    headers : [HeaderField];
  };
  public type HttpResponse = {
    body : [Nat8];
    headers : [HeaderField];
    status_code : Nat16;
  };
  public type ListRequest = {
    token : TokenIdentifier_2;
    from_subaccount : ?SubAccount_3;
    price : ?Nat64;
  };
  public type Listing = { locked : ?Time; seller : Principal; price : Nat64 };
  public type Memo = [Nat8];
  public type Metadata = Metadata_2;
  public type Metadata_2 = {
    #fungible : {
      decimals : Nat8;
      metadata : ?[Nat8];
      name : Text;
      symbol : Text;
    };
    #nonfungible : { metadata : ?[Nat8] };
  };
  public type MintRequest = MintRequest_2;
  public type MintRequest_2 = { to : User; metadata : ?[Nat8] };
  public type Result = {
    #ok : Balance;
    #err : {
      #CannotNotify : AccountIdentifier;
      #InsufficientBalance;
      #InvalidToken : TokenIdentifier;
      #Rejected;
      #Unauthorized : AccountIdentifier;
      #Other : Text;
    };
  };
  public type Result_10 = { #ok : TokenIndex; #err : CommonError };
  public type Result_11 = {
    #ok : (AccountIdentifier_3, ?Listing);
    #err : CommonError;
  };
  public type Result_12 = { #ok : Balance; #err : CommonError_2 };
  public type Result_2 = {
    #ok : [(TokenIndex, ?Listing, ?[Nat8])];
    #err : CommonError;
  };
  public type Result_3 = { #ok : [TokenIndex]; #err : CommonError };
  public type Result_4 = { #ok : Balance_2; #err : CommonError };
  public type Result_5 = { #ok; #err : CommonError };
  public type Result_6 = { #ok; #err : Text };
  public type Result_7 = { #ok : (AccountIdentifier_3, Nat64); #err : Text };
  public type Result_8 = { #ok : Metadata; #err : CommonError };
  public type Result_9 = { #ok : AccountIdentifier_3; #err : CommonError };
  public type Sale = {
    token : TokenIndex;
    expires : Time;
    subaccount : SubAccount_3;
    buyer : AccountIdentifier_3;
    price : Nat64;
  };
  public type Settlement = {
    subaccount : SubAccount_3;
    seller : Principal;
    buyer : AccountIdentifier_3;
    price : Nat64;
  };
  public type SubAccount = SubAccount_2;
  public type SubAccount_2 = [Nat8];
  public type SubAccount_3 = SubAccount;
  public type Time = Time_2;
  public type Time_2 = Int;
  public type TokenIdentifier = Text;
  public type TokenIdentifier_2 = TokenIdentifier;
  public type TokenIndex = TokenIndex_2;
  public type TokenIndex_2 = Nat32;
  public type Transaction = {
    token : TokenIdentifier_2;
    time : Time;
    seller : Principal;
    buyer : AccountIdentifier_3;
    price : Nat64;
  };
  public type TransferRequest = TransferRequest_2;
  public type TransferRequest_2 = {
    to : User;
    token : TokenIdentifier;
    notify : Bool;
    from : User;
    memo : Memo;
    subaccount : ?SubAccount;
    amount : Balance;
  };
  public type TransferResponse = TransferResponse_2;
  public type TransferResponse_2 = Result;
  public type User = { #principal : Principal; #address : AccountIdentifier };
  public type Self = actor {
    acceptCycles : shared () -> async ();
    allPayments : shared query () -> async [(Principal, [SubAccount_3])];
    allSettlements : shared query () -> async [(TokenIndex, Settlement)];
    availableCycles : shared query () -> async Nat;
    backup : shared query () -> async (
        [(TokenIndex, AccountIdentifier_3)],
        [(AccountIdentifier_3, [TokenIndex])],
        [(TokenIndex, Metadata)],
      );
    balance : shared query BalanceRequest -> async BalanceResponse;
    bearer : shared query TokenIdentifier_2 -> async Result_9;
    clearPayments : shared (Principal, [SubAccount_3]) -> async ();
    details : shared query TokenIdentifier_2 -> async Result_11;
    extensions : shared query () -> async [Extension];
    failedSales : shared query () -> async [
        (AccountIdentifier_3, SubAccount_3)
      ];
    getAllPayments : shared query () -> async [(Principal, [SubAccount_3])];
    getBuyers : shared query () -> async [(AccountIdentifier_3, [TokenIndex])];
    getMinted : shared query () -> async TokenIndex;
    getMinter : shared query () -> async Principal;
    getRegistry : shared query () -> async [(TokenIndex, AccountIdentifier_3)];
    getSold : shared query () -> async TokenIndex;
    getTokens : shared query () -> async [(TokenIndex, Metadata)];
    http_request : shared query HttpRequest -> async HttpResponse;
    index : shared query TokenIdentifier_2 -> async Result_10;
    list : shared ListRequest -> async Result_5;
    listings : shared query () -> async [(TokenIndex, Listing, Metadata)];
    lock : shared (
        TokenIdentifier_2,
        Nat64,
        AccountIdentifier_3,
        SubAccount_3,
      ) -> async Result_9;
    lostDogs : shared query () -> async [TokenIndex];
    metadata : shared query TokenIdentifier_2 -> async Result_8;
    mintNFT : shared MintRequest -> async TokenIndex;
    payments : shared query () -> async ?[SubAccount_3];
    refunds : shared query () -> async ?[SubAccount_3];
    removePayments : shared [SubAccount_3] -> async ();
    removeRefunds : shared [SubAccount_3] -> async ();
    reserve : shared (
        Nat64,
        AccountIdentifier_3,
        SubAccount_3,
      ) -> async Result_7;
    retreive : shared AccountIdentifier_3 -> async Result_6;
    salesSettlements : shared query () -> async [(AccountIdentifier_3, Sale)];
    salesStats : shared query () -> async (
        Bool,
        Nat32,
        Nat32,
        Nat,
        (Nat64, TokenIndex),
      );
    setMinter : shared Principal -> async ();
    settle : shared TokenIdentifier_2 -> async Result_5;
    settlements : shared query () -> async [
        (TokenIndex, AccountIdentifier_3, Nat64)
      ];
    supply : shared query TokenIdentifier_2 -> async Result_4;
    tokens : shared query AccountIdentifier_3 -> async Result_3;
    tokens_ext : shared query AccountIdentifier_3 -> async Result_2;
    transactions : shared query () -> async [Transaction];
    transfer : shared TransferRequest -> async TransferResponse;
  }
}