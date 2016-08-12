


/**切换**/
$(document).ready(function(){
    $ (function ()
    {
        $ ('.mainBaner ul  li').click (function ()
        {
            var that = $ (this);
            that.addClass ('select').siblings ('li').removeClass ('select');
            var i = that.index ('.mainBaner ul li');
            var len = 100 /6;
            var lenwidth = len * i + '%';
            $ ('section .page').css (
                {
                    '-webkit-transform' : "translate(" + lenwidth + ")",
                    '-webkit-transition' : '300ms linear'
                });
        })
    })
	
});



