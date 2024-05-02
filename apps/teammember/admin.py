from django.contrib import admin

from apps.teammember.models import TeamMember

# Register your models here.
@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'position')