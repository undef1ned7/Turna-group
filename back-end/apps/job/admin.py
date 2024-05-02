from django.contrib import admin

from apps.job.models import Job

# Register your models here.
@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'earnings', 'start_date', 'description')