# avatar ![](https://avatar.tobi.sh/avatar?size=20) ![](https://avatar.tobi.sh/1?size=20) ![](https://avatar.tobi.sh/github?size=20) ![](https://avatar.tobi.sh/love?size=20) ![](https://avatar.tobi.sh/node?size=20)
![](https://metriks.herokuapp.com/avatar/count?text=%20Avatars%20generated%20)

Avatar generates beautiful gradient avatars for your app or homepage (for example if they didn't upload one)

Avatar is built on top of [`micro`](https://github.com/zeit/micro) and is hosted on [`Heroku`](https://heroku.com)

## How to use avatar

To generate an avatar just embed following URL `https://avatar.tobi.sh/`. Now you can append a username to generate an avatar

You will receive a `png` image with a size of 120*120px

Each name will generate a unique `avatar`. Just replace `tobiaslins` with an `username` or `email`

### PNG avatar
```
https://avatar.tobi.sh/tobiaslins
```

![Avatar for tobiaslins](https://avatar.tobi.sh/tobiaslins)

### Custom size

```
https://avatar.tobi.sh/tobiaslins?size=30
```

![Avatar for tobiaslins](https://avatar.tobi.sh/tobiaslins?size=30)

### SVG avatar
It is possible to receive an svg avatar by adding the extension `.svg` or the parameter `type=svg`

```
https://avatar.tobi.sh/tobiaslins.svg
https://avatar.tobi.sh/tobiaslins?type=svg
```

### Add initials
It is possible to add initials or a text to the avatar by adding the `text` parameter.

*Feature only working with SVG*

```
https://avatar.tobi.sh/tobiaslins.svg?text=TL
```
![Avatar for tobiaslins](https://avatar.tobi.sh/tobiaslins.svg?text=TL)

### Random avatar
If you just want to use random avatars without providing usernames, you can use the root endpoint

```
https://avatar.tobi.sh/
```
![Random Avatar](https://avatar.tobi.sh?size=50)

## Usecase
Are you creating a new app/website with an user system?

If your user doesn't want to load a custom profile picture - you can show him a unique generated avatar

### Deploy to Heroku
Do you want to deploy avatar to Heroku!
We got all that covered for you.
Just click this button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/tobiaslins/avatar)

### Metrics

#### Requests
![](https://metriks.herokuapp.com/avatar/graphs/requests)

#### Response Time
![](https://metriks.herokuapp.com/avatar/graphs/ms)

#### Reqests per second - last 5 minutes
![](https://metriks.herokuapp.com/avatar/graphs/reqs)
