# Generated by Django 5.2.1 on 2025-06-24 14:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_alter_comentarios_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comentarios',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.usuario'),
        ),
    ]
