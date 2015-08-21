//FULL HEIGHT
var bookdetailsfullheightpreface = $(window).height();
$('.js-fullheight-preface').css('min-height', (bookdetailsfullheightpreface - 100));
//BINDING STARTS
//Function for drawer
function beforeShowInfantpreface(e)
{
  if (isPostBack == false)
  {
  GetInfantBookById("7bbb7bb3-986e-67b9-8ff0-ff0000d15b77", "zh");
  GetLessonlessonContentLabels("zh");
  GetTeacherAppLabels("en");
  isPostBack = true;
  }
  BindInfantPrefaceDetails(currentBook);
  $(".preloader-mf").show();
  closeNav();
}
function afterShowInfantpreface(e)
{ 
  $(".preloader-mf").hide();
}
function beforeHideInfantpreface(e)
{
//Do Something
}