from django.db import models

# Create your models here.
class Hotel(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False, verbose_name='Название')
    rating = models.FloatField(verbose_name='Рейтинг')
    location = models.CharField(max_length=100, null=False, blank=False, verbose_name='Местоположение')
    image = models.ImageField(upload_to='hotel_images/', null=True, blank=True, verbose_name='Фоновое изображение')


    def __str__(self):
        return self.name 
    
    class Meta:
        verbose_name = "Отель"
        verbose_name_plural = "Отели"