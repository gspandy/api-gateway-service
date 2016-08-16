<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no, maximum-scale=1">
    <title>
        50家全案互联网家装
    </title>
    <meta name="keywords" content="page1"/>
    <script src="../static/js/react.js"></script>
    <script src="../static/js/react.min.js"></script>
    <script src="../static/js/jquery.min.js"></script>
    <script src="../static/js/react-dom.min.js"></script>
    <script src="../static/js/browser.min.js"></script>
    <script src="../static/js/JSXTransformer.js"></script>
    <script src="../static/js/index.js"></script>
    <script src="../static/js/commonUrl.js"></script>
    <script src="../static/js/react-bootstrap.min.js" type="text/javascript"></script>
    <link rel="stylesheet" href="../static/css/bootstrap.min.css">
    <link rel="stylesheet" href="../static/css/bootstrap-theme.css" />
    <link href="../static/css/index.css"/>
    </head>
<script type="text/jsx">

    /**UserInfo AND Exit IN header**/
    const UserInfoAndExit = (
            <div className="UserInfoAndExit">
                <span className="userInfo" href="#">小小红</span>
                <span className="exit">退出</span>
            </div>
    );

    ReactDOM.render(UserInfoAndExit, document.getElementById('header'));
    /**UserInfo AND Exit IN header **/


    /**pageBar START**/
    const {Pagination}= ReactBootstrap;
    const PaginationAdvanced = React.createClass({
        getInitialState() {
            return {
                activePage: 1
            }
        },

        handleSelect(eventKey){
            this.setState({
                activePage: eventKey
            });
        },

        render() {
            return (
                    <div  className="pageBar">
                        <div  className="pageTotal">
                            <span>共999条</span>
                            <span>1/112页</span>
                        </div>
                        <Pagination
                                prev
                                next
                                first
                                last
                                ellipsis
                                boundaryLinks
                                items={20}
                                maxButtons={5}
                                activePage={this.state.activePage}
                                onSelect={this.handleSelect} />
                        <div className="tiaozhuan">
                            <span>跳转到</span>
                            <input type="text"/>
                            <input className="go" type="submit" value="GO" placeholder="GO"/>
                        </div>

                    </div>
            );
        }
    });

    ReactDOM.render(<PaginationAdvanced />, document.getElementById('footer'));
    /** pageBar END**/

</script>
<body>
	<div id="app"></div>
	
<div id="body" class="body">
    <div id="header" class="header"></div>
    <div id="topMenu"> </div>
   <div id="footer"></div>
   <script src="../static/bundle.js"></script>
</div>
</body>
</html>