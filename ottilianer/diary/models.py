import datetime

from django.db import models
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail.search import index
from wagtail.images.models import Image


class DiaryPage(Page):
    date = models.DateField("Post date", default=datetime.date.today)
    author = models.CharField(max_length=250)
    intro = models.CharField(max_length=250)
    body = RichTextField()

    image = models.ForeignKey(
        "wagtailimages.Image", on_delete=models.CASCADE, related_name="+"
    )

    search_fields = Page.search_fields + [
        index.SearchField("intro"),
        index.SearchField("body"),
    ]

    content_panels = Page.content_panels + [
        FieldPanel("date"),
        FieldPanel("author"),
        FieldPanel("intro"),
        FieldPanel("body"),
        FieldPanel("image"),
    ]

    subpage_types = []
    parent_page_types = ["diary.DiaryIndexPage"]


class DiaryIndexPage(Page):
    def get_context(self, request):
        context = super().get_context(request)
        diarypages = self.get_children().live().order_by("-first_published_at")  # type: ignore
        context["diarypages"] = diarypages
        return context

    subpage_types = ["diary.DiaryPage"]
    parent_page_types = ["home.HomePage"]
