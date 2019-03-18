# Repo for a sample web part for a Microsoft 365 support case

This web part demonstrates the issue with hash routing in SharePoint Online.

Reproduce:

- Add the web part to a SharePoint Online page and click on one of the links
- See the url which now contains `#/myroute/B`
- Copy and paste the entire url into an inkognito browser tab
- login.microsoftonline.com appears and you have to login
- After all redirects completed, the url is blank again (without a #), then the React Hash Router appends the default route with #/ to the url.

The original url is not preseved.