from wagtail.fields import RichTextField
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from home import content as text_content
from diary.models import DiaryPage


class HomePage(Page):

    welcome = RichTextField(blank=False, default=text_content.WELCOME)
    about = RichTextField(blank=False, default=text_content.ABOUT)

    content_panels = Page.content_panels + [
        FieldPanel("welcome"),
        FieldPanel("about"),
    ]

    def get_context(self, request):
        context = super().get_context(request)
        all_blogpages = DiaryPage.objects.live().public()
        random_diarypages = all_blogpages.order_by("?")[:3]
        context["random_diarypages"] = random_diarypages
        return context
