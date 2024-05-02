from django.db import models

# Create your models here.
class TeamMember(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False, verbose_name='Имя')
    photo = models.ImageField(upload_to='team_photos/', null=True, blank=True, verbose_name='Фото')
    position = models.CharField(max_length=100, null=False, blank=False, verbose_name='Должность')
    email = models.EmailField(verbose_name='Email')

    def __str__(self):
        return self.name 
    
    class Meta:
        verbose_name = "Коллектив"
        verbose_name_plural = "Коллектив"

