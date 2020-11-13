window.onload = function(){
   var videoUrls = window.ytplayer.config.args.url_encoded_fmt_stream_map.split(",");
   console.log("Our extension has loded", videoUrls);

}
