# Generated by Django 5.0.6 on 2024-05-17 12:34

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Home", "0005_education_rename_project_source_portfolio_blog_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="timeline",
            name="skills",
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
