from django.contrib import admin

from apps.blog.models import Blog

# Register your models here.
@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'description' ,'date','image','views')