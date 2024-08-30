from django.db import models

class Machine(models.Model):
    name = models.CharField(max_length=255)
    operational = models.BooleanField(default=True)
    under_maintenance = models.BooleanField(default=False)

class Maintenance(models.Model):
    machine = models.ForeignKey(Machine, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    date = models.DateField()

class Team(models.Model):
    name = models.CharField(max_length=255)
    active = models.BooleanField(default=True)
