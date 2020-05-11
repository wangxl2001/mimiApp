//index.js
//获取应用实例

Page({
  data: {
    msg: 'doudou',
    userInfo: {},
    isShow: true
  },
 
  onLoad:function(options){
    //判断用户是否授权了
    this.getUserInfo();
  },

  getUserInfo(){
    wx.getSetting({
      success: (data) => {
        console.log(data);
        if (data.authSetting['scope.userInfo']){
          this.setData({
            isShow: false
          })
        }else{
          this.setData({
            isShow: true
          })
        }        
      },
    })
    wx.getUserInfo({      
      success: (data) => {      
        this.setData({  
           userInfo: data.userInfo      
        });
      },
      fail: () => {
        console.log('获取用户数据失败');       
      }
    })
  },

  handleGetUserInfo(data){
    console.log('用户点击了', data);
    if(data.detail.rawData){
      console.log(this);     
      this.getUserInfo();
    }    
  },

  handleClick(){
    //点击跳转到list页面
    wx.navigateTo({
      url: '/pages/list/list',
    })    
  }
})
