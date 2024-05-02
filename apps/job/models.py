from django.db import models

# Create your models here.
class Job(models.Model):
    title = models.CharField(max_length=100, null=False, blank=False, verbose_name='Название')
    location = models.CharField(max_length=100, null=False, blank=False, verbose_name='Местоположение')
    earnings = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False, verbose_name='Заработок')
    start_date = models.DateField(null=False, blank=False, verbose_name='Начало дня работы')
    description = models.TextField(verbose_name='Описание')
    image = models.ImageField(upload_to='job_images/', null=True, blank=True, verbose_name='Картинка')


    def __str__(self):
        return self.title 
    
    class Meta:
        verbose_name = "Актуальная работа"
        verbose_name_plural = "Актуальные работы"