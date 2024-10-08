from wagtail.images.blocks import ImageChooserBlock
from wagtailmarkdown.blocks import MarkdownBlock
from wagtail.fields import StreamField
from wagtail.blocks import ListBlock, CharBlock
from wagtail.models import Page

# from wagtail.admin.panels import StreamFieldPanel


# class DiaryPage(Page):
#     content = StreamField(
#         [
#             ("summary", ListBlock(CharBlock(label="bullet"))),
#             ("image", ImageChooserBlock()),
#             ("markdown", MarkdownBlock()),
#         ]
#     )

#     content_panels = Page.content_panels + [StreamFieldPanel("content")]
