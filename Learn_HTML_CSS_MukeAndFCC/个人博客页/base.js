$(function() {
  $input = $("input");
  $input.focus(function() {
    $textVal = $(this).val();
    if ($textVal == this.defaultValue) {
      $(this).val("");
    }
  })
  $name.blur(function() {
    $textVal = $(this).val();
    if ($textVal == "") {
      $(this).val(this.defaultValue);
    }
  })
})
