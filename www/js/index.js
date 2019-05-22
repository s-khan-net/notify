var app = {
    
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
   
    onDeviceReady: function() {
      var now = new Date().getTime();
      var d1 = new Date(now + 150000); //2.5 minutes 
      var n1 = {
        id:1,
        title:'wake up',
        text:'Wake up, its time!',
        smallIcon:'file://img/notification_icon.png',
        icon: 'file://img/icon.png',
        sound: null,
        vibrate:true,
        at: d1
      };
      cordova.plugins.notification.local.schedule(n1);
      
      var btnChkAc = document.getElementById('btnChkActive');
      
      btnChkAc.addEventListener("click",function(){
     
            cordova.plugins.notification.local.getAll(function(notifications) {
              var ids = []
              for(var i=0;i<notifications.length;i++){ids.push(notifications[i].id);}
              document.getElementById("ac").innerHTML =` active notif.: ${ids}`
            }, cordova.plugins);
        });

      var btnCreate = document.getElementById('btnCreate');
      btnCreate.addEventListener('click',function(){
        alert('Creating...');
        cordova.plugins.notification.local.schedule({
          id:2,
          title:'notification',
          text:'immediate notification!',
          smallIcon:'file://img/notification_icon.png',
          icon: 'file://img/icon.png',
          sound: null,
          vibrate:true,
          at: new Date(now + 1000)
        });
      })
    }
}