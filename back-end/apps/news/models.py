from django.db import models

# Create your models here.
class News(models.Model):
    title = models.CharField(max_length=100, null=False, blank=False, verbose_name='Название')
    description = models.TextField(verbose_name='Описание')
    date = models.DateField(auto_now_add=True, verbose_name='Дата')
    image = models.ImageField(upload_to='news_images/', null=True, blank=True, verbose_name='Картинка')



    def __str__(self):
        return self.title 
    
    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"