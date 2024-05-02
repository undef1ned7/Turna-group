from django.db import models

# Create your models here.
class Blog(models.Model):
    title = models.CharField(null=False, blank=False, max_length=100, verbose_name='Заголовок')
    description = models.TextField(verbose_name='Описание')
    date = models.DateField(auto_now_add=True, verbose_name='Дата')
    image = models.ImageField(upload_to='blog_images/', null=True, blank=True, verbose_name='Картина')
    views = models.PositiveIntegerField(default=0, verbose_name='Количество просмотров')


    def __str__(self):
        return self.title 
    
    class Meta:
        verbose_name = "Блог"
        verbose_name_plural = "Блог"