const textbox_input = {
  html: `<textarea class="input_text" placeholder="Enter text here..."></textarea>
  <div class='input_text_saliency'></div>`,
  init: function() {},
  submit: function() {
    text = this.target.find(".input_text").val();
    this.io_master.input(this.id, text);
  },
  output: function(data) {
    this.target.find(".input_text").hide();
    this.target.find(".input_text_saliency").show();
    this.target.find(".input_text_saliency").empty();
    let html = '';
    let text = this.target.find(".input_text").val();
    let index = 0;
    data.forEach(function(value, index) {
      html += `<span style='background-color:rgba(255,0,0,${value})'>${text.charAt(index)}</span>`;
    })
    $(".input_text_saliency").html(html);
  },
  clear: function() {
    this.target.find(".input_text").val("");
    this.target.find(".input_text_saliency").hide();
    this.target.find(".input_text").show();
  },
  renderFeatured: function(data) {
    return data;
  },
  loadFeatured: function(data) {
    this.clear();
    this.target.find(".input_text").val(data);
  }
}
