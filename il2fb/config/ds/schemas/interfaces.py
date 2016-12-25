# coding: utf-8

import zope.interface


class INISerializable(zope.interface.Interface):

    def from_ini(ini):
        """
        Get object from a given INI config.

        """


class DefaultProvider(zope.interface.Interface):

    def default(ini):
        """
        Get object with default values.

        """
