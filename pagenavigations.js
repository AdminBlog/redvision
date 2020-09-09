// Page Navigations Settings
var postperpage=6;
var numshowpage=5;
var upPageWord =&#39;&#171; Previous&#39;;
var downPageWord =&#39;Next &#187;&#39;;
var urlactivepage=location.href;
var home_page=&quot;/&quot;;

$(document).ready(function(){
var olderLink = $(&quot;a.blog-pager-older-link&quot;).attr(&quot;href&quot;);
$(&quot;a.blog-pager-older-link&quot;).load(olderLink+&quot; .post-title:first&quot;, function() {
var olderLinkTitle = $(&quot;a.blog-pager-older-link&quot;).text();
$(&quot;a.blog-pager-older-link&quot;).text(olderLinkTitle);//rgt
});
var newerLink = $(&quot;a.blog-pager-newer-link&quot;).attr(&quot;href&quot;);
$(&quot;a.blog-pager-newer-link&quot;).load(newerLink+&quot; .post-title:first&quot;, function() {
var newerLinkTitle = $(&quot;a.blog-pager-newer-link:first&quot;).text();
$(&quot;a.blog-pager-newer-link&quot;).text(newerLinkTitle);
});
});
