from django.db import models

# Create your models here.
class Settings(models.Model):
    logo = models.ImageField(verbose_name='Логотип')
    title = models.CharField(max_length=255, verbose_name='Заголовок')
    phone_number = models.CharField(max_length=20, verbose_name='Номер телефона')
    address = models.CharField(max_length=255, verbose_name='Адрес')
    email = models.EmailField(verbose_name='Email')
    company_experience = models.CharField(max_length=255, verbose_name='Опыт компании')

    def __str__(self):
        return self.title


    class Meta:
        verbose_name = 'Настройки'
        verbose_name_plural = 'Настройки'


# Форма заявки: 
class FormSubmission(models.Model):
    username = models.CharField(max_length=100, verbose_name='Имя пользователя')
    email = models.EmailField(verbose_name='Email')
    phone_number = models.CharField(max_length=20, verbose_name='Номер телефона')

    def __str__(self):
        return f"Отправил форму {self.username}"
    

    class Meta:
        verbose_name = "Форма заявки"
        verbose_name_plural = "Форма заявки"

class FormQuestion(models.Model):
    username = models.CharField(max_length=100, verbose_name='Имя пользователя')
    email = models.EmailField(verbose_name='Email')
    phone_number = models.CharField(max_length=20, verbose_name='Номер телефона')
    comment = models.TextField(verbose_name='Комментарий', blank=True)

    def __str__(self):
        return f"Отправил форму {self.username}"
    

    class Meta:
        verbose_name = "Форма заявки вопроса"
        verbose_name_plural = "Форма заявки вопроса"

# FAQ
class FAQ(models.Model):
    question = models.CharField(max_length=255, verbose_name='Вопрос')
    answer = models.TextField(verbose_name='Ответ')

    def __str__(self):
        return self.question

# Карусель
class CarouselItem(models.Model):
    background_image = models.ImageField(upload_to='carousel_images/',verbose_name='Задний фон: изображение')
    title = models.CharField(max_length=100, verbose_name='Текст')

    def __str__(self):
        return self.title
    

    class Meta:
        verbose_name = "Карусель"
        verbose_name_plural = "Карусели"


# Ссылка на карту
class Map(models.Model):
    map_link = models.CharField(max_length=255, verbose_name='Ссылка на карту')

    def __str__(self):
        return self.map_link
    

    class Meta:
        verbose_name = "Ссылка на карту"
        verbose_name_plural = "Ссылка на карту"

class Direction(models.Model):
    title = models.CharField(max_length=100, null=False, blank=False, verbose_name='название страны')
    flag = models.ImageField(upload_to='flag_photos/', null=True, blank=True, verbose_name='Флаг')

    def __str__(self):
        return self.title 
    
    class Meta:
        verbose_name = "направление"
        verbose_name_plural = "направление"