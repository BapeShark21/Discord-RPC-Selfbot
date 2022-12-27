// to understand how to use app id and image keys, follow https://github.com/slowwdev/Discord-Selfbot-RPC/wiki/Installation

module.exports = {
    // spotify/game/twitch
    "mode": "game", 
    // dnd/online/idle
    "status": "online",

    "game": {
        "applicationID": "1056106819497496629",

        "name": "AutoCad", // title
        "details": "Workspace: Linear ISO", // first row below title
        "state": "Editing: LINEAR-ISO.dwg", // row below first row

        "largeImageKey": "autocad", // Large Image
        "largeImageText": "AutoCad", // the text when img surrounded (default is largeimage name in dev portal)

        "smallImageKey": "autodesk", // Small Image
        "smallImageText": "AutoDesk 2023",
        
        // Date.now() Epoch timestamps
        "startTimestamp": Date.now(), // time elapsed since this timestamp (increase ++)
        "endTimestamp": "", // time left since this timestamp (decrease --)
      
    },
    "twitch": {
        "applicationID": "",
        "url": "", // twitch channel link

        "details": "", // title
        "state": "", // first row below title (playing ...)

        "largeImageKey": "", // in dev portal, upload img then name it with the name you want to appear with image is surrounded
        "largeImageText": "", // use this to replace text when img surrounded it will also be second row below title, if you dont want the row dont use it and setup text via dev portal (img name)
        
        "smallImageKey": "",
        "smallImageText": "",

        "startTimestamp": "",
        "endTimestamp": ""
    },
    "spotify": {
        "name": "", // for exemple listening to {name} instead of listening to spotify
        "details": "", // title
        "state": "", // row below title

        "largeImageKey": "", // https://github.com/mewzax/Discord-RPC-Selfbot/wiki/Spotify-API
        "largeImageText": "", // will also be second row below title
        
        "smallImageKey": "",
        "smallImageText": "",
        
        "startTimestamp": "",
        "endTimestamp": "",
    }
}
