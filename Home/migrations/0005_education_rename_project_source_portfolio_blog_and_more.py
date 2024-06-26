# Generated by Django 5.0.6 on 2024-05-17 12:25

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Home", "0004_remove_skill_percentage_aboutme_image"),
    ]

    operations = [
        migrations.CreateModel(
            name="Education",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("year", models.IntegerField()),
                ("education", models.CharField(max_length=100)),
                ("GPA", models.DecimalField(decimal_places=2, max_digits=4)),
            ],
        ),
        migrations.RenameField(
            model_name="portfolio",
            old_name="project_source",
            new_name="blog",
        ),
        migrations.RemoveField(
            model_name="blog",
            name="content",
        ),
        migrations.AddField(
            model_name="portfolio",
            name="github",
            field=models.URLField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="portfolio",
            name="name",
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="portfolio",
            name="youtube",
            field=models.URLField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="contact",
            name="mobile_number",
            field=models.IntegerField(),
        ),
    ]
