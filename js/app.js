/**
 * Created by icellent on 15/2/2.
 */

$overlay = $('<div id="overlay"></div>');
$img = $('<img>');
$overlay.append($img);
$caption = $('<p></p>');
$overlay.append($caption);

$("#imagegallery a").click(function(event) {
    event.preventDefault();
    imageLocation = $(this).attr("href");
    $img.attr("src", imageLocation);
    captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
    $("body").append($overlay);
    $overlay.show();
});

$overlay.click( function() {
        $(this).hide("slow");
    }
);