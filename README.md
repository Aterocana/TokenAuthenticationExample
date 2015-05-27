# TokenAuthenticationExample
A short example of Token Authentication

# How to test it
You can implement a client by yourself :)
Or you can use curl from command line.

Login authentication:

<code>curl -i localhost:3000/login --data "username=USERNAME&password=PASSWORD"</code>

----

Restricted API access (possibly, to have a successful authentication, use the token you got from login):

<code>curl -i http://localhost:3000/api/restricted -H "Authorization: Bearer YOURTOKEN"
</code>

----

You can try different configuration and see you can't access to restricted resource (or login).
