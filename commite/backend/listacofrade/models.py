from django.db import models

#Every cofradia registered must have this parameters

class Cofradia (models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    creacion = models.DateField()
    #For sorting later
    orden = models.IntegerField()


    def __str__(self):
        return self.name

    