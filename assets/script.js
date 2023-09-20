var today = dayjs();
$('#1a').text(today.format('MMM D, YYYY'));

$(".saveBtn").on("click", function(event) {
    event.preventDefault()
});