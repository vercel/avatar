# avatar ![](https://avatarservice.herokuapp.com/avatar?size=20) ![](https://avatarservice.herokuapp.com/1?size=20) ![](https://avatarservice.herokuapp.com/github?size=20) ![](https://avatarservice.herokuapp.com/love?size=20) ![](https://avatarservice.herokuapp.com/node?size=20)


Avatar generates beautiful gradient avatars for your app or homepage (for example if they didn't upload one)

Avatar is build on top of [`micro`](https://github.com/zeit/micro) and is hosted on `heroku`

## How to use avatar

To generate an avatar just embed following url `https://avatarservice.herokuapp.com/`. Now you can append a username to generate an avatar

You will receive a `png` image with a size of 120*120px

Each name will generate a unique `avatar`. Just replace `tobiaslins` with an `username` or `email`

### PNG avatar
```
https://avatarservice.herokuapp.com/tobiaslins
```

![Avatar for tobiaslins](https://avatarservice.herokuapp.com/tobiaslins)

### Custom size

```
https://avatarservice.herokuapp.com/tobiaslins?size=30
```

![Avatar for tobiaslins](https://avatarservice.herokuapp.com/tobiaslins?size=30)

### SVG avatar
It is possible to receive an svg avatar by adding the parameter `type=svg`
```
https://avatarservice.herokuapp.com/tobiaslins?type=svg
```

### Random avatar
If you just want to use random avatars without providing usernames you can use following endpoint

```
https://avatarservice.herokuapp.com/random
```
![Random Avatar](https://avatarservice.herokuapp.com/random?size=50)
