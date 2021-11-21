# hams-portal-main


If on windows - Dfinity SDK cannot run on windows, so if on windows you need to install wsl2:
https://docs.microsoft.com/en-us/windows/wsl/install

After wsl2 is installed, you need to install linux on it:
https://petri.com/how-to-install-ubuntu-in-windows-10-with-wsl-2

If using vscode, it is best to install remote-wsl extension, basically your vscode will act the same way as if run under ubuntu.

After you have linux ready (of if on macOS)...

Go to:
https://sdk.dfinity.org/docs/quickstart/local-quickstart.html

and follow steps for 'Download and install' and 'Verify the SDK is ready to use'

After dfx is ready to use and in path to your project do

 > dfx start --clean --background
  
 > dfx deploy
  
  
Find your assets (frontend) canister_id, it should be like canister_id xxxxx-xxxxx-xxxxx-xxxxx-cai 
 
And now you should be able to go to:
http://xxxxx-xxxxx-xxxxx-xxxxx-cai.localhost:8000/login



