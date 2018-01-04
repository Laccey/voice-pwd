var app = getApp();
Page({
    data:{
        winHeight:"",//窗口高度
        currentTab:0, //预设当前项的值
        scrollLeft:0, //tab标题的滚动条位置
        expertList:[
	        { //假数据
	        	type:0,
	            desc:"发出",
	            money:3.32,
	            num:1
	        },
	        { //假数据
	        	type:1,
	            desc:"收到",
	            money:7.32,
	            num:2
	        }
        ],
        userInfo: {},
	    hasUserInfo: false,
	    canIUse: wx.canIUse('button.open-type.getUserInfo'),
	    inputValue: 0
    },
    // 滚动切换标签样式
    switchTab:function(e){
        this.setData({
            currentTab:e.detail.current
        });
        // this.checkCor();
    },
    // 点击标题切换当前页时改变样式
    swichNav:function(e){
        var cur=e.target.dataset.current;
        if(this.data.currentTaB==cur){return false;}
        else{
            this.setData({
                currentTab:cur
            })
        }
    },
    //判断当前滚动超过一屏时，设置tab标题滚动条。
    // checkCor:function(){
    //   if (this.data.currentTab>4){
    //     this.setData({
    //       scrollLeft:300
    //     })
    //   }else{
    //     this.setData({
    //       scrollLeft:0
    //     })
    //   }
    // },
    onLoad: function() {  
        var that = this; 
        //  高度自适应
        // wx.getSystemInfo( {  
        //     success: function( res ) {  
        //         var clientHeight=res.windowHeight,
        //             clientWidth=res.windowWidth,
        //             rpxR=750/clientWidth;
        //       var  calc=clientHeight*rpxR-180;
        //         console.log(calc)
        //         that.setData( {  
        //             winHeight: calc  
        //         });  
        //     }  
        // });
        if (app.globalData.userInfo) {
	      this.setData({
	        userInfo: app.globalData.userInfo,
	        hasUserInfo: true
	      })
	    } else if (this.data.canIUse){
	      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
	      // 所以此处加入 callback 以防止这种情况
	      app.userInfoReadyCallback = res => {
	        this.setData({
	          userInfo: res.userInfo,
	          hasUserInfo: true
	        })
	      }
	    } else {
	      // 在没有 open-type=getUserInfo 版本的兼容处理
	      wx.getUserInfo({
	        success: res => {
	          app.globalData.userInfo = res.userInfo
	          this.setData({
	            userInfo: res.userInfo,
	            hasUserInfo: true
	          })
	        }
	      })
	    }
    },  
    getUserInfo: function(e) {
	    app.globalData.userInfo = e.detail.userInfo
	    this.setData({
	      userInfo: e.detail.userInfo,
	      hasUserInfo: true
	    })
	},
    footerTap:app.footerTap
})

