from django.contrib import admin

from apps.hotel.models import Hotel

# Register your models here.
@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
    list_display = ('name', 'rating', 'location')