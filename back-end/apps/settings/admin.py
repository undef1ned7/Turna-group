from django.contrib import admin

from apps.settings.models import Settings, FormSubmission, FormQuestion, FAQ, CarouselItem, Map, Direction

# Register your models here.
@admin.register(Settings)
class SettingsAdmin(admin.ModelAdmin):
    list_display = ( 'title', 'phone_number', 'address', 'email', 'company_experience')


@admin.register(FormSubmission)
class FormSubmissionAdmin(admin.ModelAdmin):
    list_display  = ('username', 'email', 'phone_number',)

@admin.register(FormQuestion)
class FormQuestionAdmin(admin.ModelAdmin):
    list_display  = ('username', 'email', 'phone_number', 'comment')


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ('question', 'answer')


@admin.register(CarouselItem)
class CarouselItemAdmin(admin.ModelAdmin):
    list_display = ('background_image', 'title')


@admin.register(Map)
class MapAdmin(admin.ModelAdmin):
    list_display = ('map_link', )
@admin.register(Direction)
class MapAdmin(admin.ModelAdmin):
    list_display = ('title','flag' )