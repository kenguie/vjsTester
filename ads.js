setTimeout(function() {
  var target = document.getElementById('content_video_ima-ad-container');
  target.style.display = 'none';
}, 2000);

var canvas = videojs('content_video');

var googOptions = {
  id: 'content_video',
  adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&' +
      'iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&' +
      'impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&' +
      'cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&' +
      'vid=short_onecue&correlator='
};

var options = {
  id: 'content_video',
  adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?env=vp&gdfp_req=1&impl=s&output=vast&vpaid=JS&playertype=html&unviewed_position_start=1&ciu_szs=728x90,300x250&iu=/43459271/loc-desktop/wnow/web/radio18&sz=640x480&c=43991428&m=text/xml&t=wnsz%3D30%26ispartner%3Dtrue%26%26wndomain%3Dhttp%3A//localhost%3A8080%26wnlocation%3Dhttp%3A//localhost%3A8080/clip/12977109/samplefile-with-cc&tile=1&vid=12977109&cmsid=&cust_params=playerwidth%3D640%26playerheight%3D360%26playerdimensions%3D640x360%26realvu%3Dno&description_url=http%3A//localhost%3A8080/clip/12977109/samplefile-with-cc&'
};

var options2 = {
  id: 'content_video',
  adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=4x4&ciu_szs=300x250&iu=/853/video.news12.com/BK/news&impl=s&gdfp_req=1&env=vp&output=xml_vast3&unviewed_position_start=1&url=http%3A//brooklyn.news12.com/story/37721006/3-men-1-year-old-girl-found-shot-dead-inside-brownsville-apartment%3Firispatch%3Dtrue&description_url=http%3A//brooklyn.news12.com/story/37721006/3-men-1-year-old-girl-found-shot-dead-inside-brownsville-apartment%3Firispatch%3Dtrue&ad_rule=0'
};

canvas.ima(options2);

// var target = document.getElementById('content_video');
// target.src = 'http://ktvk.videodownload.worldnow.com/KTVK_1203201804312800000AA.mp4';

// canvas.ima(options2);

// On mobile devices, you must call initializeAdDisplayContainer as the result
// of a user action (e.g. button click). If you do not make this call, the SDK
// will make it for you, but not as the result of a user action. For more info
// see our examples, all of which are set up to work on mobile devices.
// player.ima.initializeAdDisplayContainer();
