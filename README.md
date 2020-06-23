# TEST
- https://medium.com/@zafer.v3/deploy-blazor-app-on-github-pages-c12effac1c5
- https://zafer-v3.github.io/BlazorAppStarter/
- create dotnet blazor wasm app
- dotnet new blazorwasm -o WebApplication1
- cd WebApplication1
- create publish folder with dotnet cli
- dotnet publish -c Release
- go to publish folder \WebApplication1\bin\Release\netstandard2.1\publish\
- change index.html
```python 
<base href="./" />
```
- create new file .gitattributes and add this line inside * binary
- create new file .nojekyll just empty file (otherwise, folders whose name starts with underscore are not published)
- create new file 404.html
- create git repostory (git init / add / remote / push)
- I run this command before git add .
- git add --renormalize .
- Go to repository settings page and select github pages branch.
- And wait release.
