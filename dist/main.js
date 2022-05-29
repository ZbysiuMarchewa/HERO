(()=>{"use strict";var t,e=function(){function t(){this.left=new i,this.right=new i,this.up=new i}return t.prototype.keyDownUp=function(t,e){var i="keydown"==t;switch(e){case"ArrowLeft":this.left.getInput(i);break;case"ArrowUp":this.up.getInput(i);break;case"ArrowRight":this.right.getInput(i)}},t}(),i=function(){function t(){this.active=this.down=!1}return t.prototype.getInput=function(t){this.down!=t&&(this.active=t),this.down=t},t}(),o=function(){function t(t){this.buffer=document.createElement("canvas").getContext("2d"),this.context=t.getContext("2d")}return t.prototype.drawObject=function(t,e,i,o,r,n,s,h,l){this.buffer.drawImage(t,e,i,n,s,Math.round(o),Math.round(r),h,l)},t.prototype.drawMap=function(t,e,i,o,r,n,s,h){this.buffer.drawImage(e,0,i,1640,19,0,0,1640,19);for(var l=0;l<=r.length-1;l++){var a=r[l],c=a%o*s,f=Math.floor(a/o)*h,d=l%n*s,u=Math.floor(l/n)*h;this.buffer.drawImage(t,c,f,s,h,d,u+19,s,h)}this.buffer.drawImage(e,0,38,1640,31,0,589,1640,31),this.buffer.drawImage(e,0,69,1640,260,0,620,1640,260),this.buffer.drawImage(e,0,329,1640,59,0,880,1640,59)},t.prototype.drawTimebar=function(t,e,i,o,r){this.buffer.drawImage(t,0,388,1315,25,e,i,o,r)},t.prototype.fill=function(t){this.buffer.fillStyle=t,this.buffer.fillRect(0,0,this.buffer.canvas.width,this.buffer.canvas.height)},t.prototype.render=function(){this.context.drawImage(this.buffer.canvas,0,0,this.buffer.canvas.width,this.buffer.canvas.height,0,0,this.context.canvas.width,this.context.canvas.height)},t.prototype.resize=function(t,e,i){e/t>i?(this.context.canvas.height=t*i,this.context.canvas.width=t):(this.context.canvas.height=e,this.context.canvas.width=e/i),this.context.imageSmoothingEnabled=!0},t}(),r=function(){function t(t,e,i){var o=this;this.accumulated_time=0,this.animation_frame_request=void 0,this.time=0,this.time_step=t,this.updated=!1,this.update=e,this.render=i,this.handleRun=function(t){o.run(t)}}return t.prototype.run=function(t){for(this.animation_frame_request=window.requestAnimationFrame(this.handleRun),this.accumulated_time+=t-this.time,this.time=t,this.accumulated_time>=3*this.time_step&&(this.accumulated_time=this.time_step);this.accumulated_time>=this.time_step;)this.accumulated_time-=this.time_step,this.update(t),this.updated=!0;this.updated&&(this.updated=!1,this.render(t))},t.prototype.start=function(){this.accumulated_time=this.time_step,this.time=window.performance.now(),this.animation_frame_request=window.requestAnimationFrame(this.handleRun)},t.prototype.stop=function(){window.cancelAnimationFrame(this.animation_frame_request)},t}(),n=function(){function t(){}return t.prototype.collidePlatformBottom=function(t,e){return t.getTop()<e&&t.getOldTop()>=e&&(t.setTop(e),t.velocity_y=0,!0)},t.prototype.collideRightPlatformBottom=function(t,e,i,o){return t.getTop()<e&&t.getOldTop()>=e&&t.getLeft()<i+o&&(t.setTop(e),t.velocity_y=0,!0)},t.prototype.collideLeftPlatformBottom=function(t,e,i,o){return t.getTop()<e&&t.getOldTop()>=e&&t.getRight()>i&&(t.setTop(e),t.velocity_y=0,!0)},t.prototype.collidePlatformTop=function(t,e){return t.getBottom()>e&&t.getOldBottom()<=e&&(t.setBottom(e-.01),t.velocity_y=0,t.flying=!1,!0)},t.prototype.collideRightPlatformTop=function(t,e,i,o){return t.getBottom()>e&&t.getOldBottom()<=e&&t.getLeft()<i+o?(t.setBottom(e-.01),t.velocity_y=0,t.flying=!1,!0):(t.flying=!0,!1)},t.prototype.collideLeftPlatformTop=function(t,e,i,o){return t.getBottom()>e&&t.getOldBottom()<=e&&t.getRight()>i?(t.setBottom(e-.01),t.velocity_y=0,t.flying=!1,!0):(t.flying=!0,!1)},t.prototype.collidePlatformLeft=function(t,e){return t.getRight()>e&&t.getOldRight()<=e&&(t.setRight(e-.01),t.velocity_x=0,!0)},t.prototype.collidePlatformRight=function(t,e){return t.getLeft()<e&&t.getOldLeft()>=e&&(t.setLeft(e),t.velocity_x=0,!0)},t.prototype.collide=function(t,e,i,o,r,n){switch(o+=19,t){case 0:break;case 1:if(this.collidePlatformTop(e,o))return;break;case 2:if(this.collidePlatformRight(e,i+r))return;break;case 3:if(this.collidePlatformTop(e,o))return;if(this.collidePlatformRight(e,i+r))return;break;case 4:if(this.collidePlatformBottom(e,o+n))return;break;case 5:if(this.collidePlatformTop(e,o))return;if(this.collidePlatformBottom(e,o+n))return;break;case 6:if(this.collidePlatformBottom(e,o+n))return;if(this.collidePlatformRight(e,i+r))return;break;case 7:if(this.collidePlatformTop(e,o))return;if(this.collidePlatformBottom(e,o+n))return;if(this.collidePlatformRight(e,i+r))return;break;case 8:if(this.collidePlatformLeft(e,i))return;break;case 9:if(this.collidePlatformTop(e,o))return;if(this.collidePlatformLeft(e,i))return;break;case 10:if(this.collidePlatformLeft(e,i))return;if(this.collidePlatformRight(e,i+r))return;break;case 11:if(this.collidePlatformTop(e,o))return;if(this.collidePlatformLeft(e,i))return;if(this.collidePlatformRight(e,i+r))return;break;case 12:if(this.collidePlatformBottom(e,o+n))return;if(this.collidePlatformLeft(e,i))return;break;case 13:if(this.collidePlatformTop(e,o))return;if(this.collidePlatformBottom(e,o+n))return;if(this.collidePlatformLeft(e,i))return;break;case 14:if(this.collidePlatformBottom(e,o+n))return;if(this.collidePlatformLeft(e,i))return;if(this.collidePlatformRight(e,i))return;break;case 15:if(this.collidePlatformTop(e,o))return;if(this.collidePlatformBottom(e,o+n))return;if(this.collidePlatformLeft(e,i))return;if(this.collidePlatformRight(e,i+r))return;break;case 16:if(this.collidePlatformRight(e,i+r/4))return;break;case 17:if(this.collidePlatformLeft(e,i+3*r/4))return;break;case 18:if(this.collideRightPlatformBottom(e,o+n,i,r/4))return;if(this.collidePlatformRight(e,i+r/4))return;break;case 19:if(this.collideLeftPlatformBottom(e,o+n,i+3*r/4,r/4))return;if(this.collidePlatformLeft(e,i+3*r/4))return;break;case 20:if(this.collideRightPlatformTop(e,o,i,r/2))return;if(e.flying=!0,this.collidePlatformRight(e,i+r/2))return;break;case 21:if(this.collideLeftPlatformTop(e,o,i+r/2,r/2))return;if(e.flying=!0,this.collidePlatformLeft(e,i+r/2))return;break;case 22:if(this.collidePlatformRight(e,i+r/2))return;break;case 23:if(this.collidePlatformLeft(e,i+r/2))return;break;case 24:if(this.collideRightPlatformBottom(e,o+n,i,r/2))return;if(this.collidePlatformRight(e,i+r/2))return;break;case 25:if(this.collideLeftPlatformBottom(e,o+n,i+r/2,r/2))return;if(this.collidePlatformLeft(e,i+r/2))return}},t}(),s=function(){function t(t,e,i,o){this.x=t,this.y=e,this.width=i,this.height=o}return t.prototype.getBottom=function(){return this.y+this.height},t.prototype.getLeft=function(){return this.x},t.prototype.getRight=function(){return this.x+this.width},t.prototype.getTop=function(){return this.y},t.prototype.getCenterX=function(){return this.x+.5*this.width},t.prototype.getCenterY=function(){return this.y+.5*this.height},t.prototype.setBottom=function(t){this.y=t-this.height},t.prototype.setLeft=function(t){this.x=t},t.prototype.setRight=function(t){this.x=t-this.width},t.prototype.setTop=function(t){this.y=t},t.prototype.setCenterX=function(t){this.x=t-.5*this.width},t.prototype.setCenterY=function(t){this.y=t-.5*this.height},t}(),h=(t=function(e,i){return t=s.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)s.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)},function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function o(){this.constructor=e}t(e,i),e.prototype=null===i?s.create(i):(o.prototype=i.prototype,new o)}),l=function(t){function e(e){var i=t.call(this,e.x,e.y,e.width,e.height)||this;return i.destination_x=e.destination_x,i.destination_y=e.destination_y,i.destination_zone=e.destination_zone,i}return h(e,t),e.prototype.collideObject=function(t){var e=t.getCenterX(),i=t.getCenterY();return!(e<this.getLeft()||e>this.getRight()||i<this.getTop()||i>this.getBottom())},e}(s),a=function(){function t(t,e){this.count=0,this.delay=e>=1?e:1,this.frame_set=t,this.frame_index=0,this.frame_value=t[0],this.mode="pause"}return t.prototype.animate=function(){"loop"===this.mode&&this.loop()},t.prototype.changeFrameSet=function(t,e,i,o){void 0===i&&(i=10),void 0===o&&(o=0),this.frame_set!==t&&(this.count=0,this.delay=i,this.frame_set=t,this.frame_index=o,this.frame_value=t[o],this.mode=e)},t.prototype.loop=function(){for(this.count++;this.count>this.delay;)this.count-=this.delay,this.frame_index=this.frame_index<this.frame_set.length-1?this.frame_index+1:0,this.frame_value=this.frame_set[this.frame_index]},t}(),c=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),f=function(t){function e(e,i,o,r){var n=t.call(this,[0,1,2,1],1)||this;return n.x=e,n.y=i,n.width=o,n.height=r,n.direction_x=1,n.animation_delay=1,n.set=[0,1,2,1],n}return c(e,t),e.prototype.updateAnimation=function(){this.changeFrameSet(this.set,"loop",this.animation_delay)},e}(a),d=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),u=function(t){function e(e,i,o){var r=t.call(this,o["fly-left"],10)||this;return r.color1="#404040",r.color2="#f0f0f0",r.width=69,r.height=97,r.flying=!0,r.velocity_x=0,r.velocity_y=0,r.x=e,r.y=i,r.x_old=r.x,r.y_old=r.y,r.flying_loader=0,r.falling_loader=0,r.direction_x=1,r.player_sets=o,r.helicopter=new f(e,i,48,13.5),r}return d(e,t),e.prototype.fly=function(){this.helicopter.animation_delay=1,this.falling_loader=0,0==this.flying_loader&&(this.helicopter.delay=1),this.flying_loader<1?(this.flying_loader+=.08,this.velocity_y=0):(this.flying=!0,this.velocity_y=-10)},e.prototype.fall=function(){this.helicopter.animation_delay=5,this.flying_loader=0,this.falling_loader<1?(this.falling_loader+=.08,this.velocity_y=0):(this.flying=!0,this.velocity_y=10,this.helicopter.delay=5)},e.prototype.stop=function(){this.velocity_x=0},e.prototype.moveLeft=function(){this.direction_x=-1,this.velocity_x=-10},e.prototype.moveRight=function(){this.direction_x=1,this.velocity_x=10},e.prototype.updateAnimation=function(){this.flying?this.direction_x<0?this.changeFrameSet(this.player_sets["fly-left"],"pause"):this.changeFrameSet(this.player_sets["fly-right"],"pause"):this.direction_x<0?this.velocity_x<0?this.changeFrameSet(this.player_sets["walk-left"],"loop",2):this.changeFrameSet(this.player_sets["idle-left"],"pause"):this.direction_x>0&&(this.velocity_x>0?this.changeFrameSet(this.player_sets["walk-right"],"loop",2):this.changeFrameSet(this.player_sets["idle-right"],"pause")),this.animate(),this.updateHelicopterPosition(),this.helicopter.updateAnimation(),this.helicopter.animate()},e.prototype.updatePosition=function(){this.x_old=this.x,this.y_old=this.y,this.x+=this.velocity_x,this.y+=this.velocity_y},e.prototype.updateHelicopterPosition=function(){this.helicopter.x=1==this.direction_x?this.x-9:this.x+30,this.helicopter.y=this.y-12},e.prototype.getBottom=function(){return this.y+this.height},e.prototype.getLeft=function(){return this.x},e.prototype.getRight=function(){return this.x+this.width},e.prototype.getTop=function(){return this.y},e.prototype.getOldBottom=function(){return this.y_old+this.height},e.prototype.getOldLeft=function(){return this.x_old},e.prototype.getOldRight=function(){return this.x_old+this.width},e.prototype.getOldTop=function(){return this.y_old},e.prototype.getCenterX=function(){return this.x+.5*this.width},e.prototype.getCenterY=function(){return this.y+.5*this.height},e.prototype.getOldCenterX=function(){return this.x_old+.5*this.width},e.prototype.getOldCenterY=function(){return this.y_old+.5*this.height},e.prototype.setBottom=function(t){this.y=t-this.height},e.prototype.setLeft=function(t){this.x=t},e.prototype.setRight=function(t){this.x=t-this.width},e.prototype.setTop=function(t){this.y=t},e.prototype.setOldBottom=function(t){this.y_old=t-this.height},e.prototype.setOldLeft=function(t){this.x_old=t},e.prototype.setOldRight=function(t){this.x_old=t-this.width},e.prototype.setOldTop=function(t){this.y_old=t},e.prototype.setCenterX=function(t){this.x=t-.5*this.width},e.prototype.setCenterY=function(t){this.y=t-.5*this.height},e.prototype.setOldCenterX=function(t){this.x_old=t-.5*this.width},e.prototype.setOldCenterY=function(t){this.y_old=t-.5*this.height},e}(a),p=function(t,e,i,o,r,n){this.x=t,this.y=e,this.width=i,this.height=o,this.offset_x=r,this.offset_y=n},m=function(t,e,i){this.columns=t,this.tile_width=e,this.tile_height=i,this.player_frames=[new p(8,0,46,65,0,-10),new p(66,0,46,65,0,-10),new p(124,0,46,65,0,-10),new p(182,0,46,65,0,-10),new p(240,0,46,65,0,-10),new p(298,0,46,65,0,-10),new p(356,0,46,65,0,-10),new p(410,0,46,65,0,-10),new p(468,0,46,65,0,-10),new p(526,0,46,65,0,-10),new p(584,0,46,65,0,-10),new p(642,0,46,65,0,-10),new p(700,0,46,65,0,-10),new p(758,0,46,65,0,-10)],this.helicopter_frames=[new p(0,66,32,9,0,0),new p(32,66,32,9,0,0),new p(64,66,32,9,0,0)]},_=function(){function t(){this.collider=new n,this.player_sets={"fly-right":[0],"walk-right":[1,2,3,4,5],"idle-right":[6],"fly-left":[7],"walk-left":[8,9,10,11,12],"idle-left":[13]},this.player=new u(300,19,this.player_sets),this.columns=10,this.rows=6,this.level="1",this.zone_id=0,this.doors=[],this.door=void 0,this.tile_set=new m(10,164,95),this.height=this.tile_set.tile_height*this.rows+369,this.width=this.tile_set.tile_width*this.columns,this.time=Date.now(),this.time_limit=128}return t.prototype.collideObject=function(t){var e,i,o,r,n;0==this.zone_id&&t.getTop()<19&&(t.setTop(19),t.velocity_y=0),r=Math.floor((t.getTop()-19)/this.tile_set.tile_height),i=Math.floor(t.getLeft()/this.tile_set.tile_width),n=this.collision_map[r*this.columns+i],this.collider.collide(n,t,i*this.tile_set.tile_width,r*this.tile_set.tile_height,this.tile_set.tile_width,this.tile_set.tile_height),r=Math.floor((t.getTop()-19)/this.tile_set.tile_height),o=Math.floor(t.getRight()/this.tile_set.tile_width),n=this.collision_map[r*this.columns+o],this.collider.collide(n,t,o*this.tile_set.tile_width,r*this.tile_set.tile_height,this.tile_set.tile_width,this.tile_set.tile_height),e=Math.floor((t.getBottom()-19)/this.tile_set.tile_height),i=Math.floor(t.getLeft()/this.tile_set.tile_width),n=this.collision_map[e*this.columns+i],this.collider.collide(n,t,i*this.tile_set.tile_width,e*this.tile_set.tile_height,this.tile_set.tile_width,this.tile_set.tile_height),e=Math.floor((t.getBottom()-19)/this.tile_set.tile_height),o=Math.floor(t.getRight()/this.tile_set.tile_width),n=this.collision_map[e*this.columns+o],this.collider.collide(n,t,o*this.tile_set.tile_width,e*this.tile_set.tile_height,this.tile_set.tile_width,this.tile_set.tile_height)},t.prototype.setup=function(t){this.graphical_map=t.graphical_map,this.top_coords=t.top_coords,this.collision_map=t.collision_map,this.columns=t.columns,this.rows=t.rows,this.doors=new Array,this.zone_id=t.id;for(var e=t.doors.length-1;e>-1;--e){var i=t.doors[e];this.doors[e]=new l(i)}this.door&&(-1!=this.door.destination_x&&(this.player.setCenterX(this.door.destination_x),this.player.setOldCenterX(this.door.destination_x)),-1!=this.door.destination_y&&(this.player.setCenterY(this.door.destination_y),this.player.setOldCenterY(this.door.destination_y)),this.door=void 0)},t.prototype.update=function(){Date.now()-this.time>=1e3&&(this.time=Date.now(),this.time_limit--),this.player.updatePosition(),this.collideObject(this.player);for(var t=this.doors.length-1;t>-1;--t){var e=this.doors[t];e.collideObject(this.player)&&(this.door=e)}this.player.updateAnimation()},t}(),y=function(){function t(){this.world=new _}return t.prototype.update=function(){this.world.update()},t}(),g=function(){function t(){this.tile_set_image=new Image,this.rest_map_image=new Image,this.hero_image=new Image,this.currentZoneId="0"}return t.prototype.loadTileSetImage=function(t,e,i,o){var r=[this.tile_set_image,this.rest_map_image,this.hero_image],n=0;[].forEach.call(r,(function(t){t.complete?++n==r.length&&o():t.addEventListener("load",(function(){++n==r.length&&o()}),!1)})),this.tile_set_image.src=t,this.rest_map_image.src=e,this.hero_image.src=i},t.prototype.requestJSON=function(t,e){var i=new XMLHttpRequest;i.addEventListener("load",(function(){e(JSON.parse(this.responseText))}),{once:!0}),i.open("GET",t),i.send()},t}();window.addEventListener("load",(function(){var t=function(t){s.keyDownUp(t.type,t.code)},i=function(){h.resize(document.documentElement.clientWidth,document.documentElement.clientHeight,l.world.height/l.world.width),h.render()},n=new g,s=new e,h=new o(document.querySelector("canvas")),l=new y,a=new r(1e3/30,(function(){h.drawMap(n.tile_set_image,n.rest_map_image,l.world.top_coords,l.world.tile_set.columns,l.world.graphical_map,l.world.columns,l.world.tile_set.tile_width,l.world.tile_set.tile_height),h.drawTimebar(n.rest_map_image,288,661,Math.round(1315*l.world.time_limit/128),25);var t=l.world.tile_set.helicopter_frames[l.world.player.helicopter.frame_value];h.drawObject(n.hero_image,t.x,t.y,l.world.player.helicopter.x,l.world.player.helicopter.y,t.width,t.height,48,13);var e=l.world.tile_set.player_frames[l.world.player.frame_value];h.drawObject(n.hero_image,e.x,e.y,l.world.player.x,l.world.player.y,e.width,e.height,69,97),h.render()}),(function(){s.left.active||s.right.active?s.left.active?l.world.player.moveLeft():l.world.player.moveRight():l.world.player.stop(),s.up.active?l.world.player.fly():l.world.player.fall(),l.world.door&&(a.stop(),n.requestJSON("../levels.json",(function(t){console.log(l.world.door.destination_zone),l.world.setup(t.levels[0].zones[+l.world.door.destination_zone]),a.start()}))),l.update()}));h.buffer.canvas.height=l.world.height,h.buffer.canvas.width=l.world.width,h.buffer.imageSmoothingEnabled=!0,n.requestJSON("../levels.json",(function(t){l.world.setup(t.levels[0].zones[0]),n.loadTileSetImage("images/map.png","images/restmap.png","images/hero.png",(function(){i(),a.start()}))})),window.addEventListener("keydown",t),window.addEventListener("keyup",t),window.addEventListener("resize",i)}))})();