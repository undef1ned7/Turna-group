from django.db import models

# Create your models here.
class Review(models.Model):
    video_link = models.URLField(verbose_name='Ссылка на видео')
    title = models.CharField(max_length=100, null=False, blank=False, verbose_name='Заголовок')
    description = models.TextField(verbose_name='Описание')
    image = models.ImageField(upload_to='review_images/', null=True, blank=True, verbose_name='Изображение')


    def __str__(self):
        return self.title 
    
    class Meta:
        verbose_name = "Отзыв"
        verbose_name_plural = "Отзывы"