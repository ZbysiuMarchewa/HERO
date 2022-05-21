(()=>{"use strict";var t=function(){function t(){this.left=new i,this.right=new i,this.up=new i}return t.prototype.keyDownUp=function(t,i){var e="keydown"==t;switch(i){case"ArrowLeft":this.left.getInput(e);break;case"ArrowUp":this.up.getInput(e);break;case"ArrowRight":this.right.getInput(e)}},t}(),i=function(){function t(){this.active=this.down=!1}return t.prototype.getInput=function(t){this.down!=t&&(this.active=t),this.down=t},t}(),e=function(t,i,e){this.image=new Image,this.tile_width=t,this.tile_height=i,this.columns=e},o=function(){function t(t){this.buffer=document.createElement("canvas").getContext("2d"),this.context=t.getContext("2d"),this.tile_sheet=new e(164,95,10)}return t.prototype.drawPlayer=function(t,i,e){this.buffer.fillStyle=i,this.buffer.fillRect(Math.round(t.x),Math.round(t.y),t.width,t.height),this.buffer.fillStyle=e,this.buffer.fillRect(Math.round(t.x+20),Math.round(t.y+20),t.width-40,t.height-40)},t.prototype.drawMap=function(t,i){this.buffer.drawImage(this.tile_sheet.image,0,475,1640,19,0,0,1640,19);for(var e=0;e<=t.length-1;e++){var o=t[e],h=o%this.tile_sheet.columns*this.tile_sheet.tile_width,l=Math.floor(o/this.tile_sheet.columns)*this.tile_sheet.tile_height,r=e%i*this.tile_sheet.tile_width,s=Math.floor(e/i)*this.tile_sheet.tile_height;this.buffer.drawImage(this.tile_sheet.image,h,l,this.tile_sheet.tile_width,this.tile_sheet.tile_height,r,s+19,this.tile_sheet.tile_width,this.tile_sheet.tile_height)}this.buffer.drawImage(this.tile_sheet.image,0,494,1640,31,0,589,1640,31),this.buffer.drawImage(this.tile_sheet.image,0,525,1640,260,0,620,1640,260),this.buffer.drawImage(this.tile_sheet.image,0,785,1640,59,0,880,1640,59)},t.prototype.fill=function(t){this.buffer.fillStyle=t,this.buffer.fillRect(0,0,this.buffer.canvas.width,this.buffer.canvas.height)},t.prototype.render=function(){this.context.drawImage(this.buffer.canvas,0,0,this.buffer.canvas.width,this.buffer.canvas.height,0,0,this.context.canvas.width,this.context.canvas.height)},t.prototype.resize=function(t,i,e){i/t>e?(this.context.canvas.height=t*e,this.context.canvas.width=t):(this.context.canvas.height=i,this.context.canvas.width=i/e),this.context.imageSmoothingEnabled=!1},t}(),h=function(){function t(t,i,e){var o=this;this.accumulated_time=0,this.animation_frame_request=void 0,this.time=0,this.time_step=t,this.updated=!1,this.update=i,this.render=e,this.handleRun=function(t){o.run(t)}}return t.prototype.run=function(t){for(this.accumulated_time+=t-this.time,this.time=t,this.accumulated_time>=3*this.time_step&&(this.accumulated_time=this.time_step);this.accumulated_time>=this.time_step;)this.accumulated_time-=this.time_step,this.update(t),this.updated=!0;this.updated&&(this.updated=!1,this.render(t)),this.animation_frame_request=window.requestAnimationFrame(this.handleRun)},t.prototype.start=function(){this.accumulated_time=this.time_step,this.time=window.performance.now(),this.animation_frame_request=window.requestAnimationFrame(this.handleRun)},t.prototype.stop=function(){window.cancelAnimationFrame(this.animation_frame_request)},t}(),l=function(){function t(){}return t.prototype.collidePlatformBottom=function(t,i){return t.getTop()<i&&t.getOldTop()>=i&&(t.setTop(i),t.velocity_y=0,!0)},t.prototype.collideRightPlatformBottom=function(t,i,e,o){return t.getTop()<i&&t.getOldTop()>=i&&t.getLeft()<e+o&&(t.setTop(i),t.velocity_y=0,!0)},t.prototype.collideLeftPlatformBottom=function(t,i,e,o){return t.getTop()<i&&t.getOldTop()>=i&&t.getRight()>e&&(t.setTop(i),t.velocity_y=0,!0)},t.prototype.collidePlatformTop=function(t,i){return t.getBottom()>i&&t.getOldBottom()<=i&&(t.setBottom(i-.01),t.velocity_y=0,t.flying=!1,!0)},t.prototype.collideRightPlatformTop=function(t,i,e,o){return t.getBottom()>i&&t.getOldBottom()<=i&&t.getLeft()<e+o?(t.setBottom(i),t.velocity_y=0,t.flying=!1,!0):(t.flying=!0,!1)},t.prototype.collideLeftPlatformTop=function(t,i,e,o){return t.getBottom()>i&&t.getOldBottom()<=i&&t.getRight()>e?(t.setBottom(i),t.velocity_y=0,t.flying=!1,!0):(t.flying=!0,!1)},t.prototype.collidePlatformLeft=function(t,i){return t.getRight()>i&&t.getOldRight()<=i&&(t.setRight(i-.01),t.velocity_x=0,!0)},t.prototype.collidePlatformRight=function(t,i){return t.getLeft()<i&&t.getOldLeft()>=i&&(t.setLeft(i),t.velocity_x=0,!0)},t.prototype.collide=function(t,i,e,o,h,l){switch(o+=19,t){case 0:break;case 1:if(this.collidePlatformTop(i,o))return;break;case 2:if(this.collidePlatformRight(i,e+h))return;break;case 3:if(this.collidePlatformTop(i,o))return;if(this.collidePlatformRight(i,e+h))return;break;case 4:if(this.collidePlatformBottom(i,o+l))return;break;case 5:if(this.collidePlatformTop(i,o))return;if(this.collidePlatformBottom(i,o+l))return;break;case 6:if(this.collidePlatformRight(i,e+h))return;if(this.collidePlatformBottom(i,o+l))return;break;case 7:if(this.collidePlatformTop(i,o))return;if(this.collidePlatformRight(i,e+h))return;if(this.collidePlatformBottom(i,o+l))return;break;case 8:if(this.collidePlatformLeft(i,e))return;break;case 9:if(this.collidePlatformTop(i,o))return;if(this.collidePlatformLeft(i,e))return;break;case 10:if(this.collidePlatformLeft(i,e))return;if(this.collidePlatformRight(i,e+h))return;break;case 11:if(this.collidePlatformTop(i,o))return;if(this.collidePlatformLeft(i,e))return;if(this.collidePlatformRight(i,e+h))return;break;case 12:if(this.collidePlatformLeft(i,e))return;if(this.collidePlatformBottom(i,o+l))return;break;case 13:if(this.collidePlatformTop(i,o))return;if(this.collidePlatformLeft(i,e))return;if(this.collidePlatformBottom(i,o+l))return;break;case 14:if(this.collidePlatformLeft(i,e))return;if(this.collidePlatformRight(i,e))return;if(this.collidePlatformBottom(i,o+l))return;break;case 15:if(this.collidePlatformTop(i,o))return;if(this.collidePlatformLeft(i,e))return;if(this.collidePlatformRight(i,e+h))return;if(this.collidePlatformBottom(i,o+l))return;break;case 16:if(this.collidePlatformRight(i,e+h/4))return;break;case 17:if(this.collidePlatformLeft(i,e+3*h/4))return;break;case 18:if(this.collideRightPlatformBottom(i,o+l,e,h/4))return;if(this.collidePlatformRight(i,e+h/4))return;break;case 19:if(this.collideLeftPlatformBottom(i,o+l,e+3*h/4,h/4))return;if(this.collidePlatformLeft(i,e+3*h/4))return;break;case 20:if(this.collideRightPlatformTop(i,o,e,h/2))return;if(i.flying=!0,this.collidePlatformRight(i,e+h/2))return;break;case 21:if(this.collideLeftPlatformTop(i,o,e+h/2,h/2))return;if(i.flying=!0,this.collidePlatformLeft(i,e+h/2))return;break;case 22:if(this.collidePlatformRight(i,e+h/2))return;break;case 23:if(this.collidePlatformLeft(i,e+h/2))return}},t}(),r=function(){function t(){this.color1="#404040",this.color2="#f0f0f0",this.width=60,this.height=60,this.flying=!0,this.velocity_x=0,this.velocity_y=0,this.x=300,this.y=0,this.x_old=this.x,this.y_old=this.y,this.flying_loader=0,this.falling_loader=0}return t.prototype.fly=function(){this.falling_loader=0,this.flying_loader<1?(this.flying_loader+=.08,this.velocity_y=0):(this.flying=!0,this.velocity_y=-10)},t.prototype.fall=function(){this.flying_loader=0,this.falling_loader<1?(this.falling_loader+=.08,this.velocity_y=0):(this.flying=!0,this.velocity_y=10)},t.prototype.stop=function(){this.velocity_x=0},t.prototype.moveLeft=function(){this.velocity_x=-10},t.prototype.moveRight=function(){this.velocity_x=10},t.prototype.update=function(){this.x_old=this.x,this.y_old=this.y,this.x+=this.velocity_x,this.y+=this.velocity_y},t.prototype.getBottom=function(){return this.y+this.height},t.prototype.getLeft=function(){return this.x},t.prototype.getRight=function(){return this.x+this.width},t.prototype.getTop=function(){return this.y},t.prototype.getOldBottom=function(){return this.y_old+this.height},t.prototype.getOldLeft=function(){return this.x_old},t.prototype.getOldRight=function(){return this.x_old+this.width},t.prototype.getOldTop=function(){return this.y_old},t.prototype.setBottom=function(t){this.y=t-this.height},t.prototype.setLeft=function(t){this.x=t},t.prototype.setRight=function(t){this.x=t-this.width},t.prototype.setTop=function(t){this.y=t},t.prototype.setOldBottom=function(t){this.y_old=t-this.height},t.prototype.setOldLeft=function(t){this.x_old=t},t.prototype.setOldRight=function(t){this.x_old=t-this.width},t.prototype.setOldTop=function(t){this.y_old=t},t}(),s=function(){function t(){this.collider=new l,this.player=new r,this.columns=10,this.rows=6,this.map=[0,1,2,3,4,3,4,3,4,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,45,46,47,48,45,46,45,46],this.collision_map=[0,16,17,0,0,0,0,0,0,0,0,18,19,4,4,4,4,4,4,0,2,0,0,0,0,0,0,0,0,8,2,0,0,0,0,0,0,0,0,8,0,1,1,1,20,21,1,1,1,0,0,0,0,0,22,23,0,0,0,0],this.tile_width=164,this.tile_height=95,this.height=this.tile_height*this.rows+369,this.width=this.tile_width*this.columns}return t.prototype.collideObject=function(t){var i,e,o,h,l;t.getLeft()<0?(t.setLeft(0),t.velocity_x=0):t.getRight()>this.width&&(t.setRight(this.width),t.velocity_x=0),t.getTop()<19?(t.setTop(19),t.velocity_y=0):t.getBottom()>this.tile_height*this.rows+19&&(t.setBottom(this.tile_height*this.rows+19),t.velocity_y=0,t.flying=!1),h=Math.floor((t.getTop()-19)/this.tile_height),e=Math.floor(t.getLeft()/this.tile_width),l=this.collision_map[h*this.columns+e],this.collider.collide(l,t,e*this.tile_width,h*this.tile_height,this.tile_width,this.tile_height),h=Math.floor((t.getTop()-19)/this.tile_height),o=Math.floor(t.getRight()/this.tile_width),l=this.collision_map[h*this.columns+o],this.collider.collide(l,t,o*this.tile_width,h*this.tile_height,this.tile_width,this.tile_height),i=Math.floor((t.getBottom()-19)/this.tile_height),e=Math.floor(t.getLeft()/this.tile_width),l=this.collision_map[i*this.columns+e],this.collider.collide(l,t,e*this.tile_width,i*this.tile_height,this.tile_width,this.tile_height),i=Math.floor((t.getBottom()-19)/this.tile_height),o=Math.floor(t.getRight()/this.tile_width),l=this.collision_map[i*this.columns+o],this.collider.collide(l,t,o*this.tile_width,i*this.tile_height,this.tile_width,this.tile_height)},t.prototype.update=function(){this.player.update(),this.collideObject(this.player)},t}(),n=function(){function t(){this.world=new s}return t.prototype.update=function(){this.world.update()},t}();window.addEventListener("load",(function(){var i=function(t){l.keyDownUp(t.type,t.code)},e=function(){r.resize(document.documentElement.clientWidth-32,document.documentElement.clientHeight-32,s.world.height/s.world.width),r.render()},l=new t,r=new o(document.querySelector("canvas")),s=new n,f=new h(1e3/30,(function(){r.drawMap(s.world.map,s.world.columns),r.drawPlayer(s.world.player,s.world.player.color1,s.world.player.color2),r.render()}),(function(){l.left.active||l.right.active?l.left.active?s.world.player.moveLeft():s.world.player.moveRight():s.world.player.stop(),l.up.active?s.world.player.fly():s.world.player.fall(),s.update()}));r.buffer.canvas.height=s.world.height,r.buffer.canvas.width=s.world.width,r.tile_sheet.image.addEventListener("load",(function(){e(),f.start()}),{once:!0}),r.tile_sheet.image.src="images/map.png",window.addEventListener("keydown",i),window.addEventListener("keyup",i),window.addEventListener("resize",e)}))})();