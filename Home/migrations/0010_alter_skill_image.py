# Generated by Django 5.0.6 on 2024-05-22 13:06

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Home", "0009_alter_education_gpa_alter_education_year"),
    ]

    operations = [
        migrations.AlterField(
            model_name="skill",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="Images"),
        ),
    ]
