# avatar ![](https://avatarservice.herokuapp.com/avatar?size=20)

Avatar generates beautiful generated gradient avatars for your app or homepage.

Avatar is build on top of [`micro`](https://github.com/zeit/micro) and is hosted on `heroku`

## How to use avatar

To generate an avatar just embed following url

The default avatar is `png` with a size of 120*120px

Each name will generate a unique `avatar`. Just replace `tobiaslins` with an `username` or `email`

### PNG
```
https://avatarservice.herokuapp.com/tobiaslins
```

![Avatar for tobiaslins](https://avatarservice.herokuapp.com/tobiaslins)

### Custom size

```
https://avatarservice.herokuapp.com/test?size=30
```

![Avatar for tobiaslins](https://avatarservice.herokuapp.com/test?size=30)

### SVG
It is possible to receive an svg avatar by adding the parameter `type=svg`
```
https://avatarservice.herokuapp.com/tobiaslins?type=svg
```

### Examples
![](https://avatarservice.herokuapp.com/1?size=30) ![](https://avatarservice.herokuapp.com/github?size=30) ![](https://avatarservice.herokuapp.com/love?size=30) ![](https://avatarservice.herokuapp.com/node?size=30)
![](https://avatarservice.herokuapp.com/heroku?size=30)
![](https://avatarservice.herokuapp.com/micro?size=30)
