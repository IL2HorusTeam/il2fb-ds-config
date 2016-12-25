# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import StringType

from .interfaces import INISerializable
from .helpers import field_from_ini


@zope.interface.implementer(INISerializable)
class About(Model):
    name = StringType(
        default="",
        required=True,
    )
    description = StringType(
        default="",
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'name': field_from_ini(
                cls.name, ini,
                'NET', 'serverName',
            ),
            'description': field_from_ini(
                cls.description, ini,
                'NET', 'serverDescription',
            ),
        })
