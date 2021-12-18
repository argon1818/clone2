$(document).ready(function () {
    var inQueeComments = $('main #profile #profile_comment .cmnts .inQuee');
    var inQueueBox = $('main #profile #profile_comment  .inQueueBox');
    var myComments = $('main #profile #profile_comment .cmnts .mycmnts');
    var myCommentsBox = $('main #profile #profile_comment .myCmntsBox');
    inQueeComments.click(function () {
        myCommentsBox.addClass('active');
        $('main #profile #profile_comment .cmnts .mycmnts').addClass('active');
        inQueeComments.addClass('active');
        inQueueBox.addClass('active');
    })
    myComments.click(function () {
        myCommentsBox.removeClass('active');
        $('main #profile #profile_comment .cmnts .mycmnts').removeClass('active');
        $('main #profile #profile_comment .cmnts .mycmnts:after').addClass('active');
        inQueeComments.removeClass('active');
        inQueueBox.removeClass('active');
    })

})