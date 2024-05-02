from django.contrib import admin

from apps.review.models import Review

# Register your models here.
@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')