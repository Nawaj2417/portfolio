# models.py

from django.db import models

class Introduction(models.Model):
    name = models.CharField(max_length=100)
    profession = models.CharField(max_length=100)
    image = models.ImageField(upload_to='Images')

    def __str__(self):
        return self.name

class AboutMe(models.Model):
    image = models.ImageField(upload_to="Images")
    information = models.TextField()
    cv_file = models.FileField(upload_to='cv_uploads/')

class Skill(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to="Images",null=True,blank=True)
    def __str__(self):
        return self.name


class Timeline(models.Model):
    company = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    description = models.TextField()
    skills = models.CharField(max_length=100)
    def __str__(self):
        return self.company


class Portfolio(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='portfolio/')
    github = models.URLField()
    blog = models.URLField()
    youtube = models.URLField()

    def __str__(self) -> str:
        return self.name

class Blog(models.Model):
    image = models.ImageField(upload_to='blogs/')
    title = models.CharField(max_length=100)
    url = models.URLField()
    def __str__(self) -> str:
        return self.title

class Contact(models.Model):
    location = models.CharField(max_length=100)
    email = models.EmailField()
    education = models.CharField(max_length=100)
    mobile_number = models.IntegerField()
    languages = models.CharField(max_length=100)


class Education(models.Model):
    name = models.CharField(max_length=100)
    year = models.CharField(max_length=100)
    education = models.CharField(max_length=100)
    GPA = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name
