# avatar ![](https://avatar.tobi.sh/avatar?size=20) ![](https://avatar.tobi.sh/1?size=20) ![](https://avatar.tobi.sh/github?size=20) ![](https://avatar.tobi.sh/love?size=20) ![](https://avatar.tobi.sh/node?size=20)


Avatar generates beautiful gradient avatars for your app or homepage (for example if they didn't upload one)

Avatar is build on top of [`micro`](https://github.com/zeit/micro) and is hosted on `heroku`

## How to use avatar

To generate an avatar just embed following url `https://avatar.tobi.sh/`. Now you can append a username to generate an avatar

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

### Random avatar
If you just want to use random avatars without providing usernames you can use the root endpoint

```
https://avatar.tobi.sh/
```
![Random Avatar](https://avatar.tobi.sh?size=50)
