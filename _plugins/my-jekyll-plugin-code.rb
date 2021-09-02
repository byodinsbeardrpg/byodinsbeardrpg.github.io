Jekyll::Hooks.register :pages, :post_render do |doc|
  if doc.output_ext == ".html"
    doc.output =
      doc.output.gsub(
        /<h([1-6])(.*?)id="([\w-]+)"(.*?)>(.*?)<\/h[1-6]>/,
        '<a href="#\3"><h\1\2id="\3"\4>\5</h\1></a>'
      )
  end
end